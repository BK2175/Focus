export default function Business(businesses) {
    return `
    ${businesses
        .map(business => {
            return`
            <section class="business">
                <h3 class = "businessTitle">${business.title}</h3>
                <h3>${business.industry}</h3>
                <input class="business_id" type="hidden" value="${business.id}">
                <button class="edit-business">Edit</button>
                <button class="delete-business">Delete</button>
            </section>
            `;
        })
    .join("")}

    <section class="businessAdd">
        <input class="add-business_title" type"text" placeholder="Add your business">
        <input class="add-business_industry" type"text" placeholder="Add your business industry">
        <button class="add-business">Submit</button>
    </section>    
    `
}