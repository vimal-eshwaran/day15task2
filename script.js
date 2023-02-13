 
 fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
 .then((data) => data.json())
 .then((data) => {
    let nPerPage = 10, pageNo = 0
    let pagination = document.getElementsByClassName('page-link')
    
   for(let i=0; i<pagination.length; i++){
      pagination[i].setAttribute('id', i)
      pagination[i].addEventListener('click', (e) => {
         pageNo = parseInt(e.target.id)
            getContent(pageNo, nPerPage,data)
      })
   }
}
 )

 let getContent = (pageNo, nPerPage,data) => {
   let division1= document.getElementById("table-content")
   for (var n = 0, row; row = division1.rows[n]; n++) {
      row.cells[0].innerHTML = data[n + pageNo*nPerPage].id
      row.cells[1].innerHTML = data[n + pageNo*nPerPage].name
      row.cells[2].innerHTML = data[n + pageNo*nPerPage].email 
   }
 }

 

  


    

        
    


