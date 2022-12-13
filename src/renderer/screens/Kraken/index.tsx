import { useEffect, useLayoutEffect, useState } from "react"
import { Button } from "renderer/components"
import Swal from "sweetalert2"
const { App } = window

export function KrakenScreen() {


  useEffect(() => {

    return () => {
      console.log("unmounting")
    }
  }, [])

  return (
    <div>
      <Button
        onClick={async () => {
          console.log(process.env)
          const balance = await App.krakenGetBalance()
          console.log(balance)
        }}
      >
        GET Balance
      </Button>

    </div>
  )
}
