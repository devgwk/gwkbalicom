import { useRouter } from "next/router";


export async function getPage(base_url_data,pathPage,  current_page = 1, count_per_page = 2 ) {
  const url =`${base_url_data}?_embed&per_page=${count_per_page}&page=${current_page}`
  let totalPage = 0
  const posts = await fetch(url).then((res) => {
    console.log('header:', res.headers.get('x-wp-totalpages'))
    totalPage = parseInt(res.headers.get('x-wp-totalpages'))
    return res.json()
  })


	const paginations = [];
	for (let i = 0; i < totalPage; i++) {
		let page = i + 1;
		paginations.push({
			url : `${pathPage}${page}` , 
			active : current_page == page ? true : false,
			page ,
		})
	}
	return {
		posts ,
		paginations ,
	} 

}
export async function getPaginationStatic(base_url, count_per_page = 2) {
	let totalPage = 0;
	const url =`${base_url}?per_page=${count_per_page}`
 
	const posts = await fetch(url).then((res) => {
    totalPage = parseInt(res.headers.get('x-wp-totalpages'))
    return res.json()
  })
	const paginations = [];
	for (let i = 0; i < totalPage; i++)	 {
		paginations.push({
			params: {
				page:  (i + 1).toString(),
			}
		})
	}
	return paginations;	
}