function get_blog_data() {
    const blog_data = JSON.stringify(quill_global.getContents())

    console.log(blog_data);
}

document.getElementById("upload-blog").addEventListener("click", get_blog_data)