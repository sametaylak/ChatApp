Messages = new Mongo.Collection("messages"); // messages adında bir mongo koleksiyonu oluşturduk

if (Meteor.isClient) {
  Template.body.helpers({
    messages: function () {
      return Messages.find({}, {sort: {createdAt: -1}});
      // messages koleksiyonumuzda bir sıralama işlemi yaparak tüm mesajları çekiyoruz
    }
  });

  Template.body.events({
    //form submitlendiği zaman çalışacak olan fonksiyon
    "submit .new-msg": function (event) {
      event.preventDefault();
 
      // Formda ki mesajı alıyoruz
      var text = event.target.text.value;
 
      // Mongoda ki mesajlar koleksiyonumuza ekliyoruz
      Messages.insert({
        text: text,
        createdAt: new Date()
      });
       event.target.text.value = "";
    }
  });
}
