import { useState } from 'react'

const useLocalContext = data => {
  const [ctx] = useState({})
  Object.keys(data).forEach(key => {
    ctx[key] = data[key]
  })
  return ctx
}

export default useLocalContext
