function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  const setTitle = require("node-bash-title");
  setTitle("Cyber & Woxy Token Generator");
  const fs = require("fs");
  const {HCaptchaSolver} = require("nocaptchasolver")


  // NoCaptchaAi
  const Solver = new HCaptchaSolver("UUID HERE","API KEY FOR NOCAPTCHAAI HERE","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36","a9b5fb07-92ff-493f-86fe-352a2803b3df","discord.com")
  
  
  // Other Requirments
  const request = require("sync-request")
  const fetch = require("node-fetch")
  const rs = require("readline-sync")



  // Solve Captcha
  let solvedCaptcha = Solver.solve()
  //Log Captcha
  console.log(solvedCaptcha)




  // Where The Good Stuff Happens!


  setInterval(() => {
      fetch("https://www.passwordrandom.com/query?command=password&format=json&count=2", {
          method: 'GET'
      }).then(r => r.json()).then(json => {
          fetch("http://api.scraperapi.com/?api_key=26870aade6ff4ca3c15542cfbb028f08&url=http://httpbin.org/ip", {
              method: 'GET'
          }).then(res => res.json()).then(proxyjson => {
            

              var req = JSON.parse(request("POST", "https://discord.com/api/v9/auth/register", {
                  json: {
                      "email": `gen${Math.floor(Math.random() * 5000)}@snoopy-dev.fr`,
                      "username": "$noopyyydev",
                      "password": json.char[1],
                      "consent": true,
                      "proxy": proxyjson.origin,
                      "date_of_birth": "2001-03-05",
                      "captcha_key": solvedCaptcha
                  }
              }).body)
              console.log(req.token)
              console.log(req)
              })
          })
      })
  }, 1000)