export default function categoryEdit(editCategory) {
    return `
        <section class="category">
            <h3>${editCategory.name}</h3>
            <p>${editCategory.decription}</p>
            <input class="category_id" type="hidden" value="${editCategory.id}">
        </section>

        <secction class="update-category">
            <input class="update-category_name" type"text" value="${editCategory.name}">
            <textarea rows="10" cols="30" class="update-category_description" value="${editCategory.description}"></textarea>
            <select class= 'update-category_business' name="User">
            <option value="1">Small Business</option>
            <option value="2">Fish Shop</option>
            </select>   
            <button class="update-category_submit">Update</button>
            <input class="update-category_id" type="hidden" value="${editCategory.id}">
        </section>
    `
}