import {Item} from '../../models/Item';

const itemService = {
  getItems: () => Item.findAll()
};

export default itemService;
