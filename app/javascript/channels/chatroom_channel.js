import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected: ->

  disconnected: ->

  received: (data) ->
    $('#message-container').append data.mod_message
    scroll_bottom()
