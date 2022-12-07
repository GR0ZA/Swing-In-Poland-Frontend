import { ApiResponse } from 'src/entities/api-response';
import { EventsApiService } from './events-api.service';
import { IEventsService } from './events-i.service';

export class EventsService implements IEventsService {
  private service: EventsApiService;

  constructor(eventsApiService?: EventsApiService) {
    this.service = eventsApiService || new EventsApiService();
  }

  getEvents(): Promise<Event[]> {
    return this.service.getEvents().then((res: ApiResponse) => res.content);
  }
}
