function markThreadAsSolved(msg) {
    var thread = $('#thread-' + msg.id);
    thread.find('h3 a').addClass('solved-new');
}
function sortByDate() {
  var messages = $('.msg-list-item');
  messages.sort(function(a, b) {
    var dateA = new Date($(a).find('.msg-time').text());
    var dateB = new Date($(b).find('.msg-time').text());
    return dateB - dateA;
  });
  $('#msg-list-container').html(messages);
}

function sortByKudos() {
  var messages = $('.msg-list-item');
  messages.sort(function(a, b) {
    var kudosA = parseInt($(a).find('.kudo-count').text());
    var kudosB = parseInt($(b).find('.kudo-count').text());
    return kudosA - kudosB;
  });
  $('#msg-list-container').html(messages);
}

function sortByUnanswered() {
  var messages = $('.msg-list-item');
  messages.sort(function(a, b) {
    var hasRepliesA = $(a).find('.msg-has-replies').val();
    var hasRepliesB = $(b).find('.msg-has-replies').val();
    if (hasRepliesA === 'true' && hasRepliesB === 'false') {
      return 1;
    } else if (hasRepliesA === 'false' && hasRepliesB === 'true') {
      return -1;
    } else {
      return 0;
    }
  });
  $('#msg-list-container').html(messages);
}

function sortByUnsolved() {
  var messages = $('.msg-list-item');
  messages.sort(function(a, b) {
    var isSolvedA = $(a).find('.msg-conversation-solved').val();
    var isSolvedB = $(b).find('.msg-conversation-solved').val();
    if (isSolvedA === 'true' && isSolvedB === 'false') {
      return 1;
    } else if (isSolvedA === 'false' && isSolvedB === 'true') {
      return -1;
    } else {
      return 0;
    }
  });
  $('#msg-list-container').html(messages);
}
