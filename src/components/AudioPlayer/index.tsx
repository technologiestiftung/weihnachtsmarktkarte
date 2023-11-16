import React, { useState, useRef } from 'react'
import classNames from 'classnames'
import { Music } from '../Icons'

const src = '/christmas-star-jazzhop-background-music-for-video-12073.mp3'

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
        setIsPlaying(true)
      } else {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const handleSongEnd = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
    }
  }
  const navClasses =
    'hover:bg-gold hover:text-darkblue h-10 w-10 cursor-pointer list-none text-center grid place-items-center rounded-full'

  return (
    <nav
      className={
        'fixed bottom-0 p-4 ease-in-out duration-300 z-10 right-0 top-12 h-min'
      }
    >
      <audio ref={audioRef} src={src} onEnded={handleSongEnd} />

      <button
        title="audio on/off"
        className={classNames(
          !isPlaying ? 'bg-darkblue text-gold' : 'bg-gold text-darkblue ',
          navClasses
        )}
        onClick={togglePlayPause}
      >
        <span className="mr-1">
          <Music />
        </span>
      </button>
    </nav>
  )
}

export default AudioPlayer
