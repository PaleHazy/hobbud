import { useEffect, useLayoutEffect, useState } from "react"
import { Button } from "renderer/components"
import Swal from "sweetalert2"
const { App } = window

export function DigitalOceanScreen() {
  async function checkTokenProcedure() {
    async function fireModal() {
      const token = await Swal.fire({
        title: "No token found",
        text: "Please enter your DigitalOcean API token",
        input: "text",
      })
      if (token.isConfirmed) {
        if (!token.value) {
          fireModal()
        }

        App.digitalOceanSetToken(token.value)
      } else {
        fireModal()
      }
    }

    try {
      const token = await App.digitalOceanGetToken()
      if(!token) {
        fireModal()
      }
    } catch (_) {
      console.error("no token found")
      fireModal()
    }
  }

  useEffect(() => {
    checkTokenProcedure()
    return () => {
      console.log("unmounting")
    }
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          console.log("create droplet")
        }}
      >
        Create Droplet
      </Button>
      <Button
        onClick={async () => {
          const account = await App.digitalOceanGetAccount()
          console.log(account)
        }}
      >
        Get Account
      </Button>
      <Button
        onClick={async () => {
          const token = await App.digitalOceanGetToken()
          App.logger(token)
        }}
      >
        Log Token
      </Button>
    </div>
  )
}
