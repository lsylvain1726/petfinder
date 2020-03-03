INSERT INTO pet_types(type, description)
VALUES
  ('dog', 'Fluffy and cute'),
  ('cat', 'Angry litte monsters');

INSERT INTO adoptable_pets(name, age, vaccination_status, adoption_story, adoption_status, type_id)
VALUES
  ('Coco',2,true,'Coco parents died in a fire','no',(SELECT id FROM pet_types WHERE id = 1 LIMIT 1)),
  ('Max',10,true,'Rescued from a pet store','yes',(SELECT id FROM pet_types WHERE id = 1 LIMIT 1)),
  ('Zeus',7,false,'His mom is in retirement and can no longer take care of this fiesty little thing','no',(SELECT id FROM pet_types WHERE id = 1 LIMIT 1)),
  ('Mocha',1,false,'Found on the streets','no',(SELECT id FROM pet_types WHERE id = 2 LIMIT 1)),
  ('Margeaux',100,false,'Abandoned at fire station','no',(SELECT id FROM pet_types WHERE id = 2 LIMIT 1)),
  ('Josephina',7,true,'Too many sibilings, the dogs didnt like her','yes',(SELECT id FROM pet_types WHERE id = 2 LIMIT 1));


SELECT * FROM adoptable_pets JOIN pet_types ON pet_types.id = type_id
WHERE adoptable_pets.id = 1 and pet_types.type = 'dog';