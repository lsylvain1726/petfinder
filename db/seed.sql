INSERT INTO pet_types(type, description)
VALUES
  ('dog', 'Fluffy and cute'),
  ('cat', 'Angry litte monsters');

INSERT INTO adoptable_pets(name, img_url, age, vaccination_status, adoption_story, adoption_status, type_id)
VALUES
  ('Coco','https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/29/bichon-frise.jpg?crop=1xw:0.9998552821997105xh;center,top&resize=980:*,2,true',5,true,'Coco parents died in a fire','no',(SELECT id FROM pet_types WHERE id = 1 LIMIT 1)),
  ('Max','https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/29/miniature-schnauzer.jpg?crop=1.0xw:1xh;center,top&resize=980:*,10,true',10,false,'Rescued from a pet store','yes',(SELECT id FROM pet_types WHERE id = 1 LIMIT 1)),
  ('Zeus','https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/29/standard-poodle.jpg?crop=1.0xw:1xh;center,top&resize=980:*,7,false',3,true,'His mom is in retirement and can no longer take care of this fiesty little thing','no',(SELECT id FROM pet_types WHERE id = 1 LIMIT 1)),
  ('Mocha','https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155-1024x692.jpg',1,false,'Found on the streets','no',(SELECT id FROM pet_types WHERE id = 2 LIMIT 1)),
  ('Margeaux','https://www.rd.com/wp-content/uploads/2019/11/cats-1-1024x683.jpg',100,false,'Abandoned at fire station','no',(SELECT id FROM pet_types WHERE id = 2 LIMIT 1)),
  ('Josephina','https://www.rd.com/wp-content/uploads/2019/11/cat-19-1024x684.jpg',7,true,'Too many sibilings, the dogs didnt like her','yes',(SELECT id FROM pet_types WHERE id = 2 LIMIT 1));
