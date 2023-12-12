import { Button } from '@chakra-ui/react'
import { MdSearch } from 'react-icons/md'

interface ButtonUploadProps {
  handleOnSubmit: () => void;
  loading: boolean;
}

export default function buttonSearch(props: ButtonUploadProps) {
    return (
        <Button
            isDisabled={props.loading}
            leftIcon={<MdSearch />}
            h={'3rem'}
            w={{ base: '100%', md: '155px' }}
            variant="solid"
            colorScheme="twitter"
            isLoading={props.loading}
            justifyContent={{ base: 'flex-start', md: 'center' }}
            // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
            onClick={(_e) => {
                props.handleOnSubmit()
            }}
        >
            <span style={{ marginLeft: '15px' }}> Search </span>
        </Button>
    )
}
