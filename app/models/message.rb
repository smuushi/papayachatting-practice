class Message < ApplicationRecord

    after_create_commit {broadcast_message}

    def broadcast_message

        ActionCable.server.broadcast("MessagesChannel", {
            id:, body:, author_id:
        })

    end

end