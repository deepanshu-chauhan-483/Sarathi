import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';  

import { ChevronRight } from 'lucide-react'

const CardComponent = ({ title, description, imageSrc, buttonText, buttonLink }) => {
  return (
    <Card className="border-none shadow-none flex flex-col h-full">
      <div className="h-40 flex items-center justify-center">
        <img src={imageSrc} className="h-full w-auto text-primary" alt={title} />
      </div>
      <div className="text-xl font-bold p-4">{title}</div>
      <CardContent className="flex flex-col h-full">
        <p className="text-muted-foreground flex-grow">{description}</p>
        <Button
          variant="link"
          className="mt-auto p-0 h-auto font-semibold text-left md:ml-4"
        >
          {buttonText} <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
