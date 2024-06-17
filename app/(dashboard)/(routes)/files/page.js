import React from 'react'
import { UserButton } from "@clerk/nextjs";
import Upload from '../upload/page'
function Files() {
  return (
    <div>
        {/* Files */}
        {/* <UserButton afterSignOutUrl="/"/> */}
        <Upload/>
    </div>
  )
}

export default Files