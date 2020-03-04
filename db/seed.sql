INSERT INTO pet_types(type, description)
VALUES
  ('dog', 'Fluffy and cute'),
  ('cat', 'Angry litte monsters');

INSERT INTO adoptable_pets(name, img_url, age, vaccination_status, adoption_story, adoption_status, type_id)
VALUES
  ('Coco','https://vetstreet-brightspot.s3.amazonaws.com/fa/50/1e58e45643a88e1e4c90b02e6ead/Why-does-my-dog-cock-his-head-155267401-335lc062513.jpg',5,true,'Coco parents died in a fire','no',1),
  ('Max','https://vetstreet-brightspot.s3.amazonaws.com/66/5c9450c1f011e0bfca0050568d6ceb/file/04-Marty-DT-425km080811.jpg',10,false,'Rescued from a pet store','yes',1),
  ('Zeus','https://vetstreet-brightspot.s3.amazonaws.com/e1/ce/55785b3f450f83c0e9f88287006a/dog-playing-fetch-thinkstock-451915253-335lc03214.jpg',3,true,'His mom is in retirement and can no longer take care of this fiesty little thing','no',1),
  ('Mocha','https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155-1024x692.jpg',1,false,'Found on the streets','no',2),
  ('Margeaux','https://www.rd.com/wp-content/uploads/2019/11/cats-1-1024x683.jpg',100,false,'Abandoned at fire station','no',2),
  ('Josephina','https://www.rd.com/wp-content/uploads/2019/11/cat-19-1024x684.jpg',7,true,'Too many sibilings, the dogs didnt like her','yes',2);
