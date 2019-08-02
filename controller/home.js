module.exports = {
  index: (ctx, next) => {
    console.log('ctx', ctx);
    ctx.body = '<h1>HOME page index</h1>'
  }
}