module.exports.updateBookDto = body => ({
    title : body.title,
    author_id : body.author_id,
    update_at: Date.now(),
})