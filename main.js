fetch("https://api.github.com/users/ahjam-taoufik/repos")
.then(result=>{
    let results=result.json()
      console.log(results)
      return results
})
.then(results=>{
    console.log(results[10].name)
    return results
}
)
.then(res=>{
    console.log(res.length)
    return res
}
)
.then(res=>{
    for (let i = 0; i < res.length; i++) {
         console.log(res[i].name);
        
    }
}
)
