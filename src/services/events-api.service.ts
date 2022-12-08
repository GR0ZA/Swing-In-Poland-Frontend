import { ApiResponse } from 'src/entities/api-response';
import { IEventsService } from './events-i.service';
import axios from 'src/plugins/axios';

const api = '/posts';

export class EventsApiService implements IEventsService {
  getEvents(): Promise<ApiResponse> {
    return axios.get(`${api}`).then((res) => res.data);
  }
}
