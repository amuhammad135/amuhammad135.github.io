import classnames from 'classnames'
import Link from 'next/link'
import { Layout } from '@components/common'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={classnames(styles.backgroundImage, styles.backgroundHeight)}>
      <div className={classnames(
        styles.backgroundGradient, 
        styles.backgroundHeight, 
        "flex items-end"
      )}>
        <div className="flex flex-col text-white w-auto m-40">
          <h1 className=" text-5xl font-extrabold mb-5">Learn Tennis</h1>
          <p className="my-1 w-96">From beginner to pro, Coach Jordan can coach any athlete to unlock their full tennis potential</p>
          <div className="flex flex-row mt-3">
            <Link href="/coaching">
              <a className="w-auto inline p-2 rounded bg-lime-400">Get Coaching</a>
            </Link>
            <Link href="/about">
            <a className="w-auto inline ml-4 p-2 border rounded">Learn more about Coach Jordan</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.Layout = Layout
