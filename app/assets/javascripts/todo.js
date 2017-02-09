$(function () {
  function buildHTML(todo) {
    var html = $('.todo-child').append(todo.content);
    return html;
  }

  $('.js-submit').on('click', function (e) {
    e.preventDefault();
    var keyword = $('.js-form__text-field')
    var todo = keyword.val();

    $.ajax({
      type: 'POST',
      url: '/todos.json',
      data: {
        todo: {
          content: todo
        }
      },
      dataType: 'json'
    })
      .done(function (data) {
        var html = buildHTML(data)
        $('.todos').append(html);
        keyword.val('');
      })
      .fail(function () {
        alert('error!');
      });
  });
});