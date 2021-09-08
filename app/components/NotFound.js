import Page from './Page';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Page title="Not Found">
      <div className="text-center">
        <h2>Whoops, we cannot find that page.</h2>
        <p className="lead text-muted">
          You can always visit the <Link to="/">hompage</Link> to get a fresh
          start.
        </p>
      </div>
    </Page>
  );
}
