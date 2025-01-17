```javascript
// pages/index.js
export default async function Home() {
  const MyComponent = (await import('./my-component')).default;

  return (
    <div>
      <MyComponent />
    </div>
  );
}

//pages/my-component.js
export default function MyComponent(){
  return <div>This is a dynamic import</div>;
}
```