import { getPost } from "../../helpers/api";

export default async function Post({params}) {
    const post = await getPost(params.name)
    return (
        <center>
            <br/><br/><br/>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name : {post.name}</h5>
                <h4 className="mb-2 font-normal text-gray-700 dark:text-gray-400">Email : {post.email}</h4>
                <h4 className="mb-2 font-normal text-gray-700 dark:text-gray-400">Company : {post.company.name}</h4>
                <h4 className="mb-2 font-normal text-gray-700 dark:text-gray-400">Website : {post.website}</h4>
            </div>       
        </center>
    )
}