class Tweet < ApplicationRecord
  belongs_to :user

  def as_json(options = {})
    super(methods: [:name, :blabla])
  end

  def blabla
    "blabla"
  end

  def name
    user.display_name
  end
end
