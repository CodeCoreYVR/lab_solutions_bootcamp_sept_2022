function merge(obj_a, obj_b) {
    let new_obj = {};
    for (const key in obj_a) {
      new_obj[key] = obj_a[key];
    }
    for (const key in obj_b) {
      new_obj[key] = obj_b[key];
    }
    return new_obj;
  }
  
  const object_a = {firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard'};
  const object_b = {firstName: 'Harry', lastName: 'Potter'};
  const merged_object = merge(object_a, object_b);