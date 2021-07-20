const cheerio = require("cheerio")
const fs = require("fs")
var {execSync, exec}  = require("child_process")


var html = fs.readFileSync("./problem.html",{encoding:'utf8'})

var $  = cheerio.load(html,{decodeEntities:false})

$("tbody > tr").each(function(){
  let problem = []
  $(this).find("td").each(function(){
    problem.push($(this).text())
  })
  let [id,title,content,input_f,output_f,input_e,output_e,_,hint,source] = problem
  //console.log({id,title,content,input_f,output_f,input_e,output_e,hint,source})
  // 创建文件夹
  //execSync(`mkdir -p problems/${id}`)
  //// 创建文件
  //fs.writeFileSync(`problems/${id}/content.md`,`## 描述

//${content}

//## 输入格式

//${input_f}

//## 输出格式

//${output_f}

//## 输入样例

//\`\`\`plaintext
//${input_e}
//\`\`\`

//## 输出样例

//\`\`\`plaintext
//${output_e}
//\`\`\`

//${ hint.trim().length ? "Hint" : "" }

//${hint}

//${ source.trim().length ? "## 来源" : "" }

//${source}

//`,{encoding:"utf8"})

  //// 创建文件 yaml
  //fs.writeFileSync(`problems/${id}/reference.yml`,`title: ${title}
//time: 1000
//memory: 128
//`,{encoding:'utf8'})
  console.log("",id,title)
  //process.exit()

})

