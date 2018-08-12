first_messages = []
json.chats do
  @chats.each do |chat|
    name = chat.name
    unless (chat.is_group_chat)
      chat.users.each do |user|
        if (user.id != current_user.id)
          name = "#{user.first_name} #{user.last_name}"
        end
      end
    end
    json.set! chat.id do
      json.extract! chat, :is_group_chat, :id
      json.name name
      first_message = chat.first_message
      first_messages.push(first_message)
      json.firstMessageId first_message.id
    end
  end
end
json.messages do
  first_messages.each do |msg|
    json.set! msg.id do
      json.extract! msg, :body, :created_at, :chat_id
      json.author msg.author.first_name
      json.author_id msg.author_id
    end
  end
end
