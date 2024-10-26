import React, { Suspense } from 'react'
import { RegisterPageComponent } from '../../../components/register-page'

function Page() {
  return (
    <Suspense fallback={<div></div>}>
    <RegisterPageComponent />
    </Suspense>
  )
}

export default Page
