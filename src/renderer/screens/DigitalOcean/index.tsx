import { useEffect, useLayoutEffect, useState } from "react";
import { Button } from "renderer/components";
import Swal from "sweetalert2";
const { App } = window

export function DigitalOceanScreen() {
const [token, setToken] = useState('')
  async function checkTokenProcedure() {

    async function fireModal() {
      const token = await Swal.fire({
        title: "No token found",
        text: "Please enter your DigitalOcean API token",
        input: "text",

      })
      console.log(token)
      if (token.isConfirmed) {
         App.digitalOceanSetToken(token.value)
          setToken(token.value)
      } else {
        fireModal()
      }
    }

    try {

      const token = await App.digitalOceanGetToken();
      setToken(token)
    } catch(e) {
      fireModal()
    }
}

  useEffect(() => {
    checkTokenProcedure()
  }, [])

  return (
    <div>
      <Button onClick={() => {
        console.log("create droplet")
        App.digitalOceanSetToken("oiim8immatokenboo")
      }} >Create Droplet</Button>
      <Button onClick={async () => {


        console.log(token)
      }} >TEST</Button>
    </div>
  )
}

