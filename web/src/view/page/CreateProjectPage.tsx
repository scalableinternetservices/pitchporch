import * as React from 'react'
import { useEffect, useState } from 'react'
import { check } from '../../../../common/src/util'
import { Button } from '../../style/button'
import { Input } from '../../style/input'
import { toastErr } from '../toast/toast'
import { Page } from './Page'

export function CreateProjectPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [err, setError] = useState({ title: false, description: false })

  // reset error when title/description change
  useEffect(() => setError({ ...err, title: false }), [title])
  useEffect(() => setError({ ...err, description: false }), [description])

  function createProject() {
    if (!validateInput(title, description, setError)) {
      toastErr('invalid title/description')
      return
    }

    fetch('/createProject', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    })
      .then(res => {
        check(res.ok, 'response status ' + res.status)
        return res.text()
      })
      .then(() => window.location.replace('/app/forumpage'))
      .catch(err => {
        toastErr(err.toString())
        setError({ title: true, description: true })
      })
  }

  return (
    <Page>
      <div className="mt3">
        <label className="db fw4 lh-copy f6" htmlFor="title">
          Title
        </label>
        <Input $hasError={err.title} $onChange={setTitle} $onSubmit={createProject} name="title" type="text" />
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f6" htmlFor="description">
          Description
        </label>
        <Input $hasError={err.description} $onChange={setDescription} $onSubmit={createProject} name="description" />
      </div>
      <div className="mt3">
        <Button onClick={createProject}>Create Project</Button>
      </div>
    </Page>
  )
}

function validateInput(
  title: string,
  description: string,
  setError: React.Dispatch<React.SetStateAction<{ title: boolean; description: boolean }>>
) {
  const validTitle = Boolean(title)
  const validDescription = Boolean(description)
  console.log('valid', validTitle, validDescription)
  setError({ title: !validTitle, description: !validDescription })
  return validTitle && validDescription
}