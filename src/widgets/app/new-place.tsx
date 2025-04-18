// import { Box, Text } from "@chakra-ui/react";
// import Image from "next/image";

// interface NewPlaceProps {
//   title: string;
//   image: string;
// }

// const NewPlace: React.FC<NewPlaceProps> = ({ title, image }) => {
//   return (
//     <Box
//       position="relative"
//       w="200px"
//       h="300px"
//       borderRadius="lg"
//       overflow="hidden"
//       boxShadow="md"
//       flexShrink={0}
//     >
//       <Image
//         src={image}
//         alt={title}
//         layout="fill"
//         style={{ objectFit: "cover" }}
//       />
//       <Box position="absolute" inset={0} bg="blackAlpha.600" />
//       <Text
//         position="absolute"
//         bottom={4}
//         left={4}
//         color="white"
//         fontWeight="bold"
//         fontSize="lg"
//       >
//         {title}
//       </Text>
//     </Box>
//   );
// };

// export default NewPlace;

"use client";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { forwardRef } from "react";

interface NewPlaceProps {
  title: string;
  image: string;
}

const NewPlace = forwardRef<HTMLDivElement, NewPlaceProps>(
  ({ title, image }, ref) => {
    return (
      <Box
        ref={ref}
        position="relative"
        w="200px"
        h="300px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        flexShrink={0}
      >
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        <Box position="absolute" inset={0} bg="blackAlpha.600" />
        <Text
          position="absolute"
          bottom={4}
          left={4}
          color="white"
          fontWeight="bold"
          fontSize="lg"
        >
          {title}
        </Text>
      </Box>
    );
  }
);

NewPlace.displayName = "NewPlace";

export default NewPlace;
