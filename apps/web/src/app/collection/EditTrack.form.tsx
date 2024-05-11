'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
/*
const exampleInput = {
  trackName: '',
  artistName: '',
  albumName: '',
  trackType: '',
  duration: '',
  coverUrl: '',
  discogsUrl: '',
}
*/

export default function EditTrackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="trackName"
        {...register}
      />
      <input
        type="url"
        placeholder="discogsUrl"
        {...register('discogsUrl', {})}
      />
      <input
        type="text"
        placeholder="artistName"
        {...register('artistName', {})}
      />
      <input
        type="text"
        placeholder="albumName"
        {...register('albumName', {})}
      />
      <select {...register('trackType')}>
        <option value="album">album</option>
        <option value=" single"> single</option>
        <option value=" djmix"> djmix</option>
      </select>
      <input
        type="text"
        placeholder="duration"
        {...register}
      />
      <input
        type="url"
        placeholder="coverUrl"
        {...register('coverUrl', {})}
      />

      <input type="submit" />
    </form>
  )
}
