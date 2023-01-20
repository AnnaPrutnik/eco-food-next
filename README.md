next js + formik:
https://creativedesignsguru.com/next-js-formik/

Rule 1.
export const Component: React.FC<Props> = ({...}) => {
return ()
}

re-export: export \* from '....'

Rule 2.

Components:

1. Input => type:

   - search - search input in header;
   - filter - search input in filter (part with brands);
   - checkout - inputs in checkout;
   - email - input in footer;
     //ToDo: for registration form
   - date => birthday;
   - password

2. Select => type:
   - checkout - for select in Checkout Page
   - filter - for select on Listing Page for filter on top of the page
