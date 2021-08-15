const request = require("request-promise")
const cheerio = require("cheerio")
const fs = require("fs")

const ladders_one = () => {
  request("https://a2oj.com/Ladders.html")
    .then((html) => {
      // console.log(html)
      const $ = cheerio.load(html)
      // console.log($("table").html())
      // const table = $("body > center > table:nth-child(4)")
      // console.log(table.html())
      var table = {}
      var ladders = []
      table.ladders = ladders
      // console.log(table)

      $("body > center > table:nth-child(4) > tbody > tr").each((i, el) => {
        var item = $(el).find("td").first().text()
        var id = item
        //   console.log(item + " -")
        item = $(el).find("td").first().next()
        var link = item.find("a").attr("href")
        var name = item.text()
        var link = link
        //   console.log(item.text() + " - " + link)
        item = $(el).find("td").next().next().text()
        var problems_count = item
        //   console.log(item + " -")
        var employee = {
          id,
          name,
          link,
          problems_count,
        }
        table.ladders.push(employee)
      })
      table.ladders = table.ladders.slice(1)
      // console.log(table)
      var json = JSON.stringify(table)
      fs.writeFile("./ladders/ladder_one/ladders_one.json", json, "utf-8", function (err) {
        if (err) return console.log(err)
        // console.log("Done")
      })
    })
    .catch((err) => {})

  fs.readFile("./ladders/ladder_one/ladders_one.json", "utf-8", function (err, data) {
    if (err) return console.log(err)
    obj = JSON.parse(data)
    // console.log(obj.ladders[0].link)
    obj.ladders.forEach((element) => {
      // console.log(element.id)
      request(`https://a2oj.com/${element.link}`)
        .then((html) => {
          // console.log(html)
          const $ = cheerio.load(html)
          // console.log($("table").html())
          // const table = $("body > center > table:nth-child(4)")
          // console.log(table.html())
          var table = {}
          var ladders = []
          var ladder_name = element.name
          var ladder_id = element.id
          table.ladder_id = ladder_id
          table.ladder_name = ladder_name
          table.ladders = ladders
          // console.log(table)
          $("body > center > table:nth-child(3) > tbody > tr").each((i, el) => {
            var item = $(el).find("td").first().text()
            var id = item
            //   console.log(item + " -")
            item = $(el).find("td").first().next()
            var link = item.find("a").attr("href")
            var name = item.text()
            var link = link
            //   console.log(item.text() + " - " + link)
            item = $(el).find("td").next().next().next().text()
            var difficulty_level = item
            //   console.log(item + " -")
            var employee = {
              id,
              name,
              link,
              difficulty_level,
            }
            table.ladders.push(employee)
          })
          table.ladders = table.ladders.slice(1)
          // console.log(table)
          var json = JSON.stringify(table)
          fs.writeFile(`./ladders/ladder_one/ladders_one_${element.id}.json`, json, "utf-8", function (err) {
            if (err) return console.log(err)
            // console.log("Done")
          })
        })
        .catch((err) => {})
    })
  })
}

const ladders_two = () => {
  request("https://a2oj.com/Ladders.html")
    .then((html) => {
      // console.log(html)
      const $ = cheerio.load(html)
      // console.log($("table").html())
      // const table = $("body > center > table:nth-child(4)")
      // console.log(table.html())
      var table = {}
      var ladders = []
      table.ladders = ladders
      // console.log(table)

      $("body > center > table:nth-child(7) > tbody > tr").each((i, el) => {
        var item = $(el).find("td").first().text()
        var id = item
        //   console.log(item + " -")
        item = $(el).find("td").first().next()
        var link = item.find("a").attr("href")
        var name = item.text()
        var link = link
        //   console.log(item.text() + " - " + link)
        item = $(el).find("td").next().next().text()
        var problems_count = item
        //   console.log(item + " -")
        var employee = {
          id,
          name,
          link,
          problems_count,
        }
        table.ladders.push(employee)
      })
      table.ladders = table.ladders.slice(1)
      // console.log(table)
      var json = JSON.stringify(table)
      fs.writeFile("./ladders/ladder_two/ladders_two.json", json, "utf-8", function (err) {
        if (err) return console.log(err)
        // console.log("Done")
      })
    })
    .catch((err) => {})

  fs.readFile("./ladders/ladder_two/ladders_two.json", "utf-8", function (err, data) {
    if (err) return console.log(err)
    obj = JSON.parse(data)
    // console.log(obj.ladders[0].link)
    obj.ladders.forEach((element) => {
      // console.log(element.id)
      request(`https://a2oj.com/${element.link}`)
        .then((html) => {
          // console.log(html)
          const $ = cheerio.load(html)
          // console.log($("table").html())
          // const table = $("body > center > table:nth-child(4)")
          // console.log(table.html())
          var table = {}
          var ladders = []
          var ladder_name = element.name
          var ladder_id = element.id
          table.ladder_id = ladder_id
          table.ladder_name = ladder_name
          table.ladders = ladders
          // console.log(table)
          $("body > center > table:nth-child(3) > tbody > tr").each((i, el) => {
            var item = $(el).find("td").first().text()
            var id = item
            //   console.log(item + " -")
            item = $(el).find("td").first().next()
            var link = item.find("a").attr("href")
            var name = item.text()
            var link = link
            //   console.log(item.text() + " - " + link)
            item = $(el).find("td").next().next().next().text()
            var difficulty_level = item
            //   console.log(item + " -")
            var employee = {
              id,
              name,
              link,
              difficulty_level,
            }
            table.ladders.push(employee)
          })
          table.ladders = table.ladders.slice(1)
          // console.log(table)
          var json = JSON.stringify(table)
          fs.writeFile(`./ladders/ladder_two/ladders_two_${element.id}.json`, json, "utf-8", function (err) {
            if (err) return console.log(err)
            // console.log("Done")
          })
        })
        .catch((err) => {})
    })
  })
}

ladders_one()
ladders_two()
