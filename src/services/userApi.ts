import axios from "axios"
import { type User } from "@/types"

const myAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users/"
})

async function getUser(value: number | string) {
  const valueArr = []
  const finalArr: string[] = []
  let idFlag = true

  if (typeof value == "string") {
    valueArr.push(value.split(","))
  }

  valueArr[0].map((el) => {
    if (Number.isNaN(Number(el))) {
      idFlag = false
    } else {
      idFlag = true
    }
  })
  if (idFlag) {
    valueArr[0].map((val, i) => {
      i == 0 ? finalArr.push(`?id=${val.trim()}`) : finalArr.push(`&id=${val.trim()}`)
    })
    const { data }: { data: User[] } = await myAxios.get(finalArr.join(""))
    return data
  } else {
    valueArr[0].map((val, i) => {
      i == 0 ? finalArr.push(`?username=${val.trim()}`) : finalArr.push(`&username=${val.trim()}`)
    })
    const { data }: { data: User[] } = await myAxios.get(finalArr.join(""))

    return data
  }
}

async function getUserById(value: number) {
  const { data }: { data: User } = await myAxios.get(`${value}`)

  return data
}

export { getUser, getUserById }
