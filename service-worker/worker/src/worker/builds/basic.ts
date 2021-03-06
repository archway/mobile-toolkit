import {bootstrapServiceWorker} from '../bootstrap';
import {Dynamic, FreshnessStrategy, PerformanceStrategy} from '../../plugins/dynamic';
import {ExternalContentCache} from '../../plugins/external';
import {RouteRedirection} from '../../plugins/routes';
import {StaticContentCache} from '../../plugins/static';
import {Push} from '../../plugins/push';

bootstrapServiceWorker({
  manifestUrl: 'ngsw-manifest.json',
  plugins: [
    StaticContentCache(),
    Dynamic([
      new FreshnessStrategy(),
      new PerformanceStrategy(),
    ]),
    ExternalContentCache(),
    RouteRedirection(),
    Push(),
  ],
});
