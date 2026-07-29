import Image from 'next/image'

import type {PROJECT_PAGE_QUERY_RESULT} from '@/sanity/types'

import {PortableTextRenderer} from './PortableTextRenderer'
import styles from './Slide.module.css'

type ProjectData = NonNullable<PROJECT_PAGE_QUERY_RESULT['project']>
type SlideData = ProjectData['slides'][number]

const layoutClasses = {
  'image-right': styles.imageRight,
  'image-left': styles.imageLeft,
  'image-full': styles.imageFull,
  'text-only': styles.textOnly,
} as const

export function Slide({
  project,
  slide,
  index,
  total,
  isActive,
}: {
  project: ProjectData
  slide: SlideData
  index: number
  total: number
  isActive: boolean
}) {
  const hasImage = Boolean(slide.image?.asset?.url)
  const layout = hasImage ? (slide.layout ?? 'image-right') : 'text-only'
  const isFirst = index === 0

  return (
    <article
      className={`${styles.slide} ${layoutClasses[layout]}`}
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}`}
      aria-hidden={isActive ? undefined : true}
      inert={!isActive}
    >
      <div className={styles.text}>
        <div className={styles.measure}>
          {isFirst ? (
            <div className={styles.projectIntro}>
              {project.year ? <p className={styles.eyebrow}>{project.year}</p> : null}
              <h1>{project.title}</h1>
              {project.summary?.length ? (
                <PortableTextRenderer value={project.summary} className={styles.lede} />
              ) : null}
              {project.role || project.tools?.length ? (
                <dl className={styles.meta}>
                  {project.role ? (
                    <div>
                      <dt>Role</dt>
                      <dd>{project.role}</dd>
                    </div>
                  ) : null}
                  {project.tools?.length ? (
                    <div>
                      <dt>Tools</dt>
                      <dd>{project.tools.join(' · ')}</dd>
                    </div>
                  ) : null}
                </dl>
              ) : null}
            </div>
          ) : null}

          {slide.title ? <h2>{slide.title}</h2> : null}
          {slide.body?.length ? <PortableTextRenderer value={slide.body} /> : null}

          {isFirst && (project.liveDemoUrl || project.repoUrl) ? (
            <div className={styles.actions}>
              {project.liveDemoUrl ? (
                <a
                  className={styles.primaryAction}
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live demo
                </a>
              ) : null}
              {project.repoUrl ? (
                <a
                  className={styles.secondaryAction}
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View repository
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      {hasImage && slide.image?.asset?.url ? (
        <figure className={styles.image}>
          <Image
            src={slide.image.asset.url}
            alt={slide.image.alt}
            fill
            sizes={layout === 'image-full' ? '100vw' : '(max-width: 899px) 100vw, 55vw'}
            placeholder={slide.image.asset.metadata?.lqip ? 'blur' : 'empty'}
            blurDataURL={slide.image.asset.metadata?.lqip ?? undefined}
          />
          {slide.image.caption ? <figcaption>{slide.image.caption}</figcaption> : null}
        </figure>
      ) : null}
    </article>
  )
}
