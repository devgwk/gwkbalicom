
import axios from 'axios'

//MonthlyReleasePosts
export async function MonthlyReleasePostsData() {
    const response = await axios.get('https://dev.fstdo.co.id/wordpress/wp-json/wp/v2/monthly-release') //
    return response.data;
}


