// This function marks a thread as solved by adding the "solved-new" class to the thread's heading.
function markThreadAsSolved(msg) {
    var thread = $('#thread-' + msg.id);
    thread.find('h3 a').addClass('solved-new');
}
// Sorts messages by date from newest to oldest
function sortByDate() {
  var messages = $('.msg-list-item');
  messages.sort(function(a, b) {
    var dateA = new Date($(a).find('.msg-time').text());
    var dateB = new Date($(b).find('.msg-time').text());
    return dateB - dateA;
  });
  $('#msg-list-container').html(messages);
}
// Sorts messages by number of kudos from lowest to highest
function sortByKudos() {
  var messages = $('.msg-list-item');
  messages.sort(function(a, b) {
    var kudosA = parseInt($(a).find('.kudo-count').text());
    var kudosB = parseInt($(b).find('.kudo-count').text());
    return kudosA - kudosB;
  });
  $('#msg-list-container').html(messages);
}
// Sorts messages by whether they have any replies or not
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
// Sorts messages by whether they have been marked as solved or not
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
// Event listener for the <select> element that calls the appropriate sorting function based on the selected option
$('#sort-by').on('change', function() {
  var selectedOption = $(this).val();
  if (selectedOption === 'date') {
    sortByDate();
  } else if (selectedOption === 'kudos') {
    sortByKudos();
  } else if (selectedOption === 'unanswered') {
    sortByUnanswered();
  } else if (selected
