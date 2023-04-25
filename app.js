function markThreadAsSolved(msg) {
    var thread = $('#thread-' + msg.id);
    thread.find('h3 a').addClass('solved-new');
}
