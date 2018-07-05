import * as express from 'express';
import itemService from './item.service';
import {Util} from '../../shared/Util';

const router = express.Router();

router.get('/items', (req, res) =>
  itemService.getItems()
    .then(Util.handleData(res)));

module.exports = router;
