const Getfetch = async (token: string, url: string) => {
    try {
      const res = await fetch(
        `${process.env.API_BASE_URL}${url}`, //여러개 삭제 api 만들어달라하기
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        },
      )
      if (res.ok) {
        const data = await res.json()
        return data
      }
    } catch (error) {
      console.log("error:", error)
    }
  }

const Postfetch = async (token: string, url: string, body: object) => {
    console.log(body)
    try {
      const res = await fetch(
        `${process.env.API_BASE_URL}${url}`, //여러개 삭제 api 만들어달라하기
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(
            body,
          ),
        },
      )
      if (res.ok) {
        const data = await res.json()
        console.log("data:", data)
        return data
      }
    } catch (error) {
      console.log("error:", error)
    }
  }