import { Card, CardContent, CardHeader, CardTitle } from './card';

export const GlassCard = ({ title, children, className = '' }) => {
  return (
    <Card
      className={`border-opacity-20 bg-opacity-90 ${className}`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
      }}
    >
      {title && (
        <CardHeader>
          <CardTitle className={`text-xl font-bold`}>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className={`text-white`}>{children}</CardContent>
    </Card>
  );
};
