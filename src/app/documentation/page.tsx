import {redirect} from 'next/navigation';

export default function DocumentationPage() {
  // Redirect to getting-started section by default
  redirect('/documentation/routstr');
}
