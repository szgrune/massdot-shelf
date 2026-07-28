import type {CSSProperties} from 'react'

import {leanFor} from '@/lib/lean'

import {BookCover} from './BookCover'
import type {ShelfItemData} from './Bookshelf'
import styles from './Book.module.css'

type BookStyle = CSSProperties & {'--lean': string}

export function Book({project}: {project: ShelfItemData}) {
  const style: BookStyle = {'--lean': `${leanFor(project.slug)}deg`}

  return (
    <a
      className={styles.book}
      href={`/work/${project.slug}`}
      aria-label={`View ${project.title}`}
      style={style}
    >
      <span className={styles.cover}>
        <BookCover project={project} />
        <span className={styles.spineFold} aria-hidden="true" />
        <span className={styles.pageBlock} aria-hidden="true" />
      </span>
    </a>
  )
}
